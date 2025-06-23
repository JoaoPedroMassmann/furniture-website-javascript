
const footerHTML = `
    <footer>
        <div class="inner_footer">
            <div class="footer_top">
                <div class="logo_container">
                    <h1>INSIGNIA</h1>
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
                <h2>Who are we?</h2> 
                <p>Insignia is a furniture company based in Brazil, and dedicated to bringing
                    innovation and pleasant design to your home, redefining the way you interact
                    with the every day items of your house.
                </p>
                </div>
                <div>
                    <h2>Info</h2>
                    
                    <nav>
                        <ul>
                            <li><a href="#">Institutional</a></li>
                            <li><a href="#">Common Questions</a></li>
                            <li><a href="#">Our Vision</a></li>
                            <li><a href="#">History</a></li>
                        </ul>  
                    </nav>
                    <h2>Payment Methods:</h2>
                    <div class="payment_methods">
                        
                        <img src="IMG/payment/Mastercard.svg" alt="Mastercard" >
                        <img src="IMG/payment/Visa.svg" alt="Visa">
                        <img src="IMG/payment/Amex.svg" alt="American Express">
                        <img src="IMG/payment/Discover.svg" alt="American Express">
                        <img src="IMG/payment/DinersClub.svg" alt="PIX">
                        <img src="IMG/payment/Elo.svg" alt=" CashApp">
                        <img src="IMG/payment/Affirm.svg" alt=" CashApp">

                    </div>
                </div>
                <div>
                    <div class="about_us">
                        <h2>About Us</h2>
                        <p>CNPJ: 69.540.993/0001-90</p>
                        <p>State Registration: 318.55185-57</p>
                    </div>
                    <div class="contact">
                        <h2>Contact</h2>
                        <div>
                            <i class="fa fa-envelope-o"></i>
                            <p>customersupport@insignia.com</p>
                        </div>
                        <div>
                            <i class="fa fa-phone"></i>
                            <p>+55 (46)39605541</p>
                        </div> 
                    </div>
                </div>
            </div>
            <div class="copyright_notice">
                <p>&copy; 2024-2025 Insignia. All Rights Reserved.</p>
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