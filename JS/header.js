
const headerHTML = `
    <header>
        <div class="inner_header">
            <div class="upper_header">
                <div>
                    <div>
                        <input type="text">
                    </div>
                    <div>
                        <div class="logo_container">
                        <h1>INSIGNIA</h1>
                    </div>
                    </div>
                    <div>
                        <div class="header_info">
                            <a href="#">Sign in</a>
                            <a href="#">Register</a>
                            <a href="#">Cart</a>
                        </div>
                    </div>
                </div>
            </div>
            <nav>
                <div class="menu_toggle">
                    <i class="fa fa-bars"></i>
                </div>
                <ul class="nav_links">
                    <li><a href="#">New</a></li>
                    <li><a href="#">Seating</a></li>
                    <li><a href="#">Outdoor</a></li>
                    <li><a href="#">Bath</a></li>
                    <li><a href="#">Bedding</a></li>
                    <li><a href="#">Decor</a></li>
                    <li><a href="#">Rugs</a></li>
                    <li><a href="#">Kitchen</a></li>
                    <li><a href="#">Lighting</a></li>
                </ul>
            </nav>
        </div>
    </header>
`;

function insertHeader(){
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
    scrollBehavior();
}

document.addEventListener("DOMContentLoaded", insertHeader);

//scroll
function scrollBehavior(){
    const header = document.querySelector("header");
    let lastScrollTop = window.scrollY;
    let scrollUpDistance = 0
    let ticking = false;

    function handleScroll(){
        const currentScroll = window.scrollY;

        if(currentScroll < 50){
            header.classList.remove("hide");
            scrollUpDistance = 0;
        }
        else if(currentScroll > lastScrollTop){
            header.classList.add("hide");
            scrollUpDistance = 0;
        }
        else{
            scrollUpDistance += lastScrollTop - currentScroll;
            if(scrollUpDistance > 100){
                header.classList.remove("hide");
                scrollUpDistance = 0;
            }
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll
        ticking = false;
    }

    function onScroll(){
        if(!ticking){
            requestAnimationFrame(handleScroll);
            ticking = true;
        }
    }

    window.addEventListener("scroll", onScroll);
}