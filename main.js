/* */

window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight);
    const maxBarHeight = this.window.innerHeight * 0.8;
    const progressBar = document.getElementById("progress-bar");
    progressBar.style.height = (scrollPercent * maxBarHeight) + "px";
});

/* */

/* */
var container = d3.select("#scroll");
var figure = container.select("figure");
var article = container.select("article");
var step = article.selectAll(".step");
/* */
var scroller = scrollama();

/* */
function handleResize() {
    // Right media box: square-like
    var figureWidth = figure.node().offsetWidth;
    var figureHeight = figureWidth;
    figure.style("height", figureHeight + "px");

    scroller.resize();
}

/* */
var media = [
        {
            /* */
            type: "img",
            src: "DilloPoll.jpg",
            alt: "Mayfest Productions releases poll hinting at potential music genres for 54th Dillo Day",
        },
        {
            /* */
            type: "img",
            src: "TDNWArticle.jpg",
            alt: "The Daily Northwestern article announcing new Dillo Day stag",
        }
        ];

        /* */
        function handleStepEnter(response) {
            step.classed("is-active", (d, i) => i === response.index);
            
            /* */
            if (response.index === 0) {
                const item = media[0];
                
                d3.select("#scrolly-media-container").html(`
                    <img src="${item.src}" class="scrolly-media" alt="${item.alt}">
                    `);
                
                return;

            }
                
                /* */
            if (response.index === 1) {
                d3.select("#scrolly-media-container").html(`
                    <iframe src="https://flo.uri.sh/visualisation/27863444/embed"
                    class="scrolly-media"
                    frameborder="0"
                    scrolling="no"
                    style="width:100%;height:100%;"
                    sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation">
                    </iframe>
                    `);
                        
                d3.select("#scrolly-link").attr("href", "").text("");
                        
                return;
            }
                    
                    
            /* */
            if (response.index === 2) {
                const item = media[1];
                        
                    d3.select("#scrolly-media-container").html(`
                        <img src="${item.src}" class="scrolly-media" alt="${item.alt}">
                        `);
                            
                return;
                        
            }
            }



         

/* */
function init() {
    handleResize();
    scroller
    .setup({
        step: "article .step",
        offset: 0.30
    })
    .onStepEnter(handleStepEnter);
    window.addEventListener("resize", handleResize);
}

init();