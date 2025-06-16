
const footerHTML = `
    <footer>
        <div class="inner_footer">
            <div class="footer_top">
                <div class="logo_container">
                    <h1>LOGO</h1>
                </div>
                <div class="socials">
                    <div>
                        <p>Socials:</p>
                        <ul class="social_icons">
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                            <li><a href="#"><i class="fa fa-youtube-play"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer_info">
                <div>
                    <div>
                        <p>Payment Methods:</p>
                    </div>
                    <a href="#">Institutional</a>
                    <a href="#">Common Questions</a>
                </div>
                <div class="about_us">
                    <p>About Us:</p>
                    <p>CNPJ: 69.540.993/0001-90</p>
                    <p>State Registration: 318.55185-57</p>
                </div>
            </div>
            <div class="copyright_notice">
                <p>2024-2025 Company Name. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
`;

function insertFooter(){
    if(!document.querySelector("footer")){
        document.body.insertAdjacentHTML("beforeend", footerHTML);
    }
}

document.addEventListener("DOMContentLoaded", insertFooter);