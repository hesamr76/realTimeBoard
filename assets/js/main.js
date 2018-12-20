var best = [];

function getList () {
    const url = 'http://95.156.253.5:8081/CafeBot/dev/scores';

    axios({
        url: url ,
        type: 'GET'
    }).then(res => {
        console.log('success');
        best = res.data 
        fillList(best)
    }).catch(err => {
        console.log('error', err);
    })
}

setInterval(() => {
    console.log('send request');
    getList()
}, 5000);

setInterval(() => {
    setTimeout(() => {
        scrollBottom(10000)
    }, 10000);
    setTimeout(() => {
        scrollTop(10000)
    }, 10000);
}, 50000);

function scrollTop(delay) {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("body").offset().top
    }, delay, "linear");
}

function scrollBottom(delay) {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(document).height()
    }, delay, "linear");
}

function fillList() {
    $("#best").html('')
    $("#number").html('')

    best.map(item => {
        let number = '<div class="rankItem center">'+item.rank+'</div>'

        let row = '<div class="item"><h5 class="name">'+item.name+' <--> شماره ('+item.number+')'+
        '</h5><div class="scoreDetail"><div class="slot criterion">'+item.bot+
        '</div><div class="slot criterion">'+item.time+
        '</div><div class="slot criterion">'+item.percent+
        '</div><div class="slot criterion">'+item.play+
        '</div></div><div class="totalBoard center"><div class="slot totalScore fat">'+item.total+
        '</div></div></div>'
        
        $("#number").append(number)
        $("#best").append(row)
    })
}