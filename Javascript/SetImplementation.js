/**
 * Implement Js Set Object
 */

class SetObject {
    constructor(){
        this.members = [];
    }

    add(item) {
        if (!this.has(item)){
            this.members.push(item);
        }
    }

    has(item){
        return this.members.includes(item);
    }

    delete(item){
        this.members.splice(this.members.indexOf(item), 1);
    }

    static from(collection){
        let setObj = new SetObject;
        for (let i in collection){
            setObj.add(i);
        }

        return setObj;
    }

    /**
     * Make Iterable
     */
    [Symbol.iterator](){
        return new SetObjectIterable(this);
    }
}

class SetObjectIterable{
    constructor(setObject){
        this.position = 0;
        this.setOject = setObject; 
    }

    next(){
        if (this.position >= this.setOject.members.length){
            return {
                done: true
            };
        } else {

            let result = {
                value: this.setOject.members[this.position],
                done: false
            };

            this.position++;
            return result;
        }
    }
}

/**
 * Iterable usage
 */

for (let item of SetObject.from(["A", "B", "C"])){
    console.log(item);
}