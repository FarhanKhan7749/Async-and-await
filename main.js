// console.log("person1: shows ticket");
// console.log("person2: shows ticket");

// const pomiiseWifBringsTickets = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('ticket');
//     },3000)
// });

// const getPopcorn = pomiiseWifBringsTickets.then((t)=>{
//     console.log('wife: i have the ticks');
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve,reject)=>resolve(`${t} popcorn`))
// })

// const getButter = getPopcorn.then((t)=>{
//     console.log('husband: we should go in');
//     console.log('wife: i want butter on my popcorn')
//     return new Promise((resolve,reject)=>resolve(`${t} butter`));
// });

// const getColdDrinks = getButter.then((t)=>{
//     console.log('wife: i want cold drinks')
//     return new Promise((resolve,reject)=>resolve(`${t} cold drinks`))
// })

// getColdDrinks.then((t)=>console.log(t));

// console.log("person4: shows ticket");
// console.log("person5: shows ticket");


// console.log("person1: shows ticket");
// console.log("person2: shows ticket");

// const preMoive = async () => {
//     const pomiiseWifBringsTickets = new Promise((resolve, reject) => {
//         setTimeout(() => { resolve('ticket'); }, 3000)
//     });
//     const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
//     const getbutter = new Promise((resolve, reject) => resolve(`butter`));
//     const getColdDrinks = new Promise((resolve, reject) => resolve(`Cold Drinks`));


//     let ticket = await pomiiseWifBringsTickets;
//     console.log(`wife: i have the ${ticket}`);
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungry');

//     let popcorn = await getPopcorn;
//     console.log(`husband: i got some ${popcorn}`);
//     console.log('husband: we should go in');
//     console.log('wife: i want butter on my popcorn')

//     let butter = await getbutter;
//     console.log(`husband: i got some ${butter} on popcorn`);
//     console.log('husband: anything else');
//     console.log('wife: i want cold drinks');

//     let coldDrinks = await getColdDrinks;
//     console.log(`husband:  i got ${coldDrinks}`);
//     console.log('husband: anything else');
//     console.log('wife: lets go we are getting late');
//     console.log('husband: thank you for the reminder *grins*');

//     return ticket;
// }

// preMoive().then((m) => {
//     console.log(`person3: shows ${m}`);
// }).catch((err) => {
//     console.log("ERROR");
// });
// console.log("person4: shows ticket");
// console.log("person5: shows ticket");


//3)
// console.log("person1: shows ticket");
// console.log("person2: shows ticket");

// const preMoive = async () => {
//     const pomiiseWifBringsTickets = new Promise((resolve, reject) => {
//         setTimeout(() => { resolve('ticket'); }, 3000)
//     });
//     const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
//     const getbutter = new Promise((resolve, reject) => resolve(`butter`));
//     const getColdDrinks = new Promise((resolve, reject) => resolve(`Cold Drinks`));

//     let ticket = await pomiiseWifBringsTickets;

//     let [popcorn,butter,coldDrinks] = await Promise.all([getPopcorn,getbutter,getColdDrinks]);
//     console.log(`${popcorn},${butter},${coldDrinks}`);
//     return ticket;
// }

// preMoive().then((m) => {
//     console.log(`person3: shows ${m}`);
// }).catch((err) => {
//     console.log("ERROR");
// });
// console.log("person4: shows ticket");
// console.log("person5: shows ticket");

//4)
const posts = [
    { title: 'post one', body: 'this is post one' },
    { title: 'post two', body: 'this is post two' }
];
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000);
}


// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(posts.push(post));
//         }, 2000);
//     });
// }

async function createPostDetails(post){
    // console.log("hello")
    try{
        const createPost = await new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(posts.push(post));
            }, 2000);
        });
    }catch(err){
        console.log(err);
    }
}

async function detailsdeletePost() {
    try{
        const deletePost = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (posts.length > 0) {
                    resolve(posts.pop());
                } else {
                    reject("ERROR: array is empty");
                }
            }, 1000);
        });
    }catch(err){
        console.log(err);
    }
};
// createPostDetails({ title: 'post three', body: 'this is post three' })
// .then(()=>{
//     getPosts();
//     detailsdeletePost().then(()=>{
//         getPosts();
//         detailsdeletePost().then(()=>{
//             getPosts();
//             detailsdeletePost().then(()=>{
//                 getPosts();
//                 detailsdeletePost().then(()=>{
//                     getPosts();
//                 })
//             })
//         })  
//     })
// })
async function details() {
    await createPostDetails({ title: 'post three', body: 'this is post three' });
    await getPosts();
    await detailsdeletePost();
    await getPosts();
    await detailsdeletePost();
    await getPosts();
    await detailsdeletePost();
    await getPosts();
    await detailsdeletePost();
    await getPosts();
}   
details();


/*
Why were promises discovered?

In JavaS​cript, callback functions were initially used to handle asynchronous operations. However, callbacks were limited in terms of functionality and often led to confusing code, so, ​promises were introduced to cater to these problems.

*/

/*
Why are async await better than promise.then design pattern?

promise.then is old design pattern  also create a chain of function function which looks messy and hard to understand.

async await makes asynchronous code look more like synchronous code, which is easier to understand. 

*/


//2)Write your own answer with an example
function customerPlacedOrder(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Order is placed by customer");
            reject("Customer is not instersted any more");
        },3000)
    })
}
//
function orderDetailsSentToInventory(){
    return new Promise((resolve,reject)=>{
        const productAvailable = true
        setTimeout(()=>{
            if(productAvailable){
                resolve('Product is available ready to picked,packed and dispatch');
            }else{
                reject('Product is not available in stock we have to arange it');
            }
        },1000)
    })
}
//
function orderShipped(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Order is shipped and delivery details transfer to cstomer");
            reject("lack of trnasport order is not shipped");
        },2000)
    })
}
//
function ProductReciveBycutomer(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Cutomer give 5star rating to company");
            reject("Customer is not satisfied please resolved issue");
        },3000)
    })
}

async function orderPlaced(){
    try{
        const msg = await customerPlacedOrder();
        console.log(msg);
        const msg1 = await orderDetailsSentToInventory();
        console.log(msg1);
        const msg2 = await orderShipped();
        console.log(msg2);
        const msg3 = await ProductReciveBycutomer();
        console.log(msg3);
    }catch(err){
        console.assert.toString(err)
    }
}

orderPlaced();