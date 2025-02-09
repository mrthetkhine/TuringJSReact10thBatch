const MayBe = (value)=>({
    valueOf(){
        return value;
    },
    isEmpty(value)
    {
        return value === undefined || value === null;
    },
    map(fn){
        return this.isEmpty(value)? MayBe(value) : MayBe(fn(value));
    }
});
MayBe.of = MayBe;