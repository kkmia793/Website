document.addEventListener("DOMContentLoaded", function() {
    let timer; // タイマー変数を定義

    // スクロールイベントのリスナー
    window.addEventListener("scroll", function() {
        handleHeaderVisibility();
    });

    // ページの読み込み時にも実行
    handleHeaderVisibility();

    // ヘッダーの表示制御
    function handleHeaderVisibility() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop; // スクロール量を取得

        if (scrollTop === 0) {
            // ページトップにいるときはヘッダーを非表示にする
            clearTimeout(timer);
            timer = setTimeout(function() {
                document.getElementById('main-header').style.top = "-100px";
            }, 500); // 0.5秒後に非表示にする
        } else {
            // ページトップでないときはヘッダーを即座に表示させる
            clearTimeout(timer);
            document.getElementById('main-header').style.top = "0";
        }
    }
});



document.addEventListener("DOMContentLoaded", function() {
    function handleResize() {
        const pcView = document.querySelector('.pc-content');
        const spView = document.querySelector('.sp-content');
        if (window.innerWidth <= 768) {
            pcView.style.display = 'none';
            spView.style.display = 'block';
        } else {
            pcView.style.display = 'block';
            spView.style.display = 'none';
        }
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);

    // Initial call to set the correct view on page load
    handleResize();
});


document.addEventListener("DOMContentLoaded", function() {
    const slide = document.getElementById('slide');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const indicator = document.getElementById('indicator');
    const lists = document.querySelectorAll('.list');
    const totalSlides = lists.length;
    let count = 0;
    let autoPlayInterval;

    function updateListBackground() {
        for (let i = 0; i < lists.length; i++) {
            lists[i].style.backgroundColor = i === count % totalSlides ? '#60D4DD' : '#fff';
        }
    }

    function nextClick() {
        slide.classList.remove(`slide${count % totalSlides + 1}`);
        count++;
        slide.classList.add(`slide${count % totalSlides + 1}`);
        updateListBackground();
    }

    function prevClick() {
        slide.classList.remove(`slide${count % totalSlides + 1}`);
        count--;
        if (count < 0) count = totalSlides - 1;
        slide.classList.add(`slide${count % totalSlides + 1}`);
        updateListBackground();
    }

    function startAutoPlay() {
        autoPlayInterval = setInterval(nextClick, 3000);
    }

    function resetAutoPlayInterval() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }

    next.addEventListener('click', () => {
        nextClick();
        resetAutoPlayInterval();
    });

    prev.addEventListener('click', () => {
        prevClick();
        resetAutoPlayInterval();
    });

    indicator.addEventListener('click', (event) => {
        if (event.target.classList.contains('list')) {
            const index = Array.from(lists).indexOf(event.target);
            slide.classList.remove(`slide${count % totalSlides + 1}`);
            count = index;
            slide.classList.add(`slide${count % totalSlides + 1}`);
            updateListBackground();
            resetAutoPlayInterval();
        }
    });

    startAutoPlay();
});

document.addEventListener('DOMContentLoaded', function() {
    const slide = document.getElementById('sp-slide');
    const prev = document.getElementById('sp-prev');
    const next = document.getElementById('sp-next');
    const indicators = document.querySelectorAll('#sp-indicator .list');
    let currentIndex = 0;
    const slideItems = document.querySelectorAll('.sp-product-item');

    function updateSlide(index) {
        slide.style.transform = `translateX(-${index * 25}%)`;
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }

    prev.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slideItems.length - 1;
        updateSlide(currentIndex);
    });

    next.addEventListener('click', function() {
        currentIndex = (currentIndex < slideItems.length - 1) ? currentIndex + 1 : 0;
        updateSlide(currentIndex);
    });

    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', function() {
            currentIndex = i;
            updateSlide(currentIndex);
        });
    });

    // スワイプイベントを追加
    let startX;
    slide.addEventListener('touchstart', function(event) {
        startX = event.touches[0].pageX;
    });

    slide.addEventListener('touchmove', function(event) {
        if (!startX) return;
        let moveX = event.touches[0].pageX;
        let diffX = startX - moveX;

        if (diffX > 50) {
            currentIndex = (currentIndex < slideItems.length - 1) ? currentIndex + 1 : 0;
            updateSlide(currentIndex);
            startX = null;
        } else if (diffX < -50) {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : slideItems.length - 1;
            updateSlide(currentIndex);
            startX = null;
        }
    });

    updateSlide(currentIndex);
});

document.addEventListener('DOMContentLoaded', function() {
    const slide = document.getElementById('sp-slide-2');
    const prev = document.getElementById('sp-prev-2');
    const next = document.getElementById('sp-next-2');
    const indicators = document.querySelectorAll('#sp-indicator-2 .list');
    let currentIndex = 0;
    const slideItems = document.querySelectorAll('.sp-news-item');

    function updateSlide(index) {
        slide.style.transform = `translateX(-${index * 25}%)`;
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }

    prev.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slideItems.length - 1;
        updateSlide(currentIndex);
    });

    next.addEventListener('click', function() {
        currentIndex = (currentIndex < slideItems.length - 1) ? currentIndex + 1 : 0;
        updateSlide(currentIndex);
    });

    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', function() {
            currentIndex = i;
            updateSlide(currentIndex);
        });
    });

    // スワイプイベントを追加
    let startX;
    slide.addEventListener('touchstart', function(event) {
        startX = event.touches[0].pageX;
    });

    slide.addEventListener('touchmove', function(event) {
        if (!startX) return;
        let moveX = event.touches[0].pageX;
        let diffX = startX - moveX;

        if (diffX > 50) {
            currentIndex = (currentIndex < slideItems.length - 1) ? currentIndex + 1 : 0;
            updateSlide(currentIndex);
            startX = null;
        } else if (diffX < -50) {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : slideItems.length - 1;
            updateSlide(currentIndex);
            startX = null;
        }
    });

    updateSlide(currentIndex);
});



document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.slide-menu').classList.toggle('active');
});

// メニュー項目をクリックしたときにメニューを閉じる
document.querySelectorAll('.slide-menu a').forEach(function(item) {
    item.addEventListener('click', function() {
        document.querySelector('.hamburger').classList.remove('active');
        document.querySelector('.slide-menu').classList.remove('active');
    });
});


particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });



