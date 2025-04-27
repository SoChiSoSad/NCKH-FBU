const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 4000;

app.use(express.json());

app.get('/compiler', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/compiler', (req, res) => {
    const { code, language } = req.body;
    if (!code || !language) {
        return res.status(400).json({ error: 'Code and language are required' });
    }

    const tempDir = path.join(__dirname, 'temp');
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

    let fileName, command;
    
    switch (language) {
        case 'java': {
            const classNameMatch = code.match(/public\s+class\s+([A-Za-z0-9_]+)/);
            if (!classNameMatch) {
                return res.status(400).json({ error: 'No public class found in Java code' });
            }
            const className = classNameMatch[1];
            fileName = path.join(tempDir, `${className}.java`);
            const classPath = path.resolve(tempDir);
            command = `"javac" "${fileName}" && "java" -cp "${classPath}" ${className}`;
            break;
        }
        case 'python':
            fileName = path.join(tempDir, 'script.py');
            command = `"python3" "${fileName}"`;
            break;
        case 'c':
            fileName = path.join(tempDir, 'program.c');
            command = `"gcc" "${fileName}" -o "${tempDir}/program" && "${tempDir}/program"`;
            break;
        case 'cpp':
            fileName = path.join(tempDir, 'program.cpp');
            command = `"g++" "${fileName}" -o "${tempDir}/program" && "${tempDir}/program"`;
            break;
        case 'csharp':
            fileName = path.join(tempDir, 'Program.cs');
            command = `"mcs" "${fileName}" -out:"${tempDir}/Program.exe" && "mono" "${tempDir}/Program.exe"`;
            break;
        default:
            return res.status(400).json({ error: 'Unsupported language' });
    }

    try {
        fs.writeFileSync(fileName, code);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to write file' });
    }

    exec(command, { shell: true }, (err, stdout, stderr) => {
        if (err) {
            return res.json({ output: stderr || err.message });
        }
        res.json({ output: stdout });
    });
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/compiler`);
});
