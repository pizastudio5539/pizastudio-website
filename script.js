document.addEventListener("DOMContentLoaded", function() {
    
    // 監視オプション（画面の20%が見えたら発火）
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2
    };

    // 交差（スクロールして要素が見えた）時の処理
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // クラス 'visible' を追加してCSSアニメーションを開始
                entry.target.classList.add("visible");
                // 一度表示したら監視を解除（パフォーマンス向上）
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // .scroll-trigger クラスがついている全ての要素を監視対象にする
    const targets = document.querySelectorAll(".scroll-trigger");
    targets.forEach(target => {
        observer.observe(target);
    });
});