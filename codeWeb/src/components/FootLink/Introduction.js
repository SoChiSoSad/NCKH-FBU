import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Introduction() {   
    return(
        <div>
        <Header/>
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1 style={{ color: "#2c3e50" }}>Giới thiệu về P3L</h1>
        <section>
            <h2>BẠN CÓ BIẾT?</h2>
            <p>
            Ngoài kia, có rất nhiều bạn trẻ rơi vào tình trạng chọn sai nghề, thiếu định hướng, hoặc phải gắn bó với một công việc không mang lại niềm vui và sự đủ đầy. Những bạn ấy phải đối mặt với những giai đoạn khủng hoảng khác nhau trong cuộc đời.
            </p>
            <p>
            Tuổi 22 mơ hồ không biết nên bắt đầu từ đâu để xây dựng sự nghiệp. Tuổi 28 loay hoay tìm cách cân bằng giữa tài chính và gia đình. Tuổi 40 băn khoăn liệu mình có đang sống một cuộc đời ý nghĩa hay đã bỏ lỡ những cơ hội đáng giá.
            </p>
            <p>
            Mọi thứ sẽ thay đổi nếu mỗi người được hướng dẫn tìm ra nghề nghiệp phù hợp, biết cách xác định mục tiêu rõ ràng, và sở hữu những kỹ năng cần thiết để phát triển bản thân.
            </p>
        </section>
        <section>
            <h2>Tầm nhìn của P3L</h2>
            <p>
            Trở thành nền tảng giáo dục lập trình hàng đầu, cung cấp các khóa học chất lượng cao với nội dung thông minh và thực tế. P3L mong muốn tạo dựng niềm tin từ cộng đồng bằng chính giá trị sản phẩm, thay vì chỉ dựa vào chiến lược tiếp thị.
            </p>
        </section>
        <section>
            <h2>Giá trị cốt lõi của chúng tôi</h2>
            <ul>
            <li><strong>Sự tận tâm:</strong> Chúng tôi cam kết mang đến những khóa học chất lượng cao nhất, từ miễn phí đến có phí.</li>
            <li><strong>Tư duy sáng tạo:</strong> Tất cả khóa học đều lấy người học làm trung tâm.</li>
            <li><strong>Luôn học hỏi và cải tiến:</strong> Học hỏi từ những nền tảng giáo dục hàng đầu thế giới.</li>
            <li><strong>Phát triển bền vững:</strong> Xây dựng đội ngũ nhân viên và học viên với tầm nhìn dài hạn.</li>
            </ul>
        </section>
        <section>
            <h2>Bạn nhận được gì từ P3L?</h2>
            <ul>
            <li>Thành thạo kỹ năng: Thực hành ngay trong từng bài học.</li>
            <li>Phát triển tư duy tự học: Học cách tự mở rộng kiến thức.</li>
            <li>Tiết kiệm thời gian: Lộ trình rõ ràng giúp bạn nhanh chóng đạt được mục tiêu.</li>
            <li>Tập trung vào mục tiêu: Chỉ học những điều thực sự cần thiết.</li>
            </ul>
        </section>
        <section>
            <h2>Môi trường làm việc tại P3L</h2>
            <p>
            P3L tạo dựng một môi trường làm việc lành mạnh, nơi mọi người được khuyến khích cởi mở bày tỏ quan điểm và đóng góp ý kiến. Chúng tôi tin rằng sự hợp tác và tôn trọng lẫn nhau sẽ tạo ra những sản phẩm tốt nhất.
            </p>
            <p>Hãy cùng P3L tạo nên hành trình chinh phục công nghệ của bạn! 🌟</p>
        </section>
        </div>
        <Footer/>
        </div>

    );
}
export default Introduction;