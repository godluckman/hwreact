function getCounter(num) {

    this.num = num;

    this.log = function() {
        console.log(this.num);
        return this.num;
    };

    this.count = function(n) {
        return this.num += n;
    };

    this.reset = function() {
        return this.num = 0;
    };



}

let counter = new getCounter(5);

counter.log();
counter.count(4);
counter.log();
counter.count(3);
counter.log();
counter.reset();
counter.log();
counter.count(8);
counter.log();

////    counter.log() // 5
////    .count(4)
////       .log() // 9
////       .count(3)
////       .log() // 12
////       .reset()
////       .log() // 0
////       .count(8)
////       .log(); // 8