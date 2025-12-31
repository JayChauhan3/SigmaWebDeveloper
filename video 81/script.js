const addItem = async (item) => {
    await randomTimeout();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div)
}

const randomTimeout = () => {
    return new Promise((resolve, reject) => {
        let timeout = 1 + 6 * Math.random();
        setTimeout(() => {
            resolve()
        }, timeout * 1000)
    })

}



async function Main() {


    let t = setInterval(() => {

        let last = document.getElementsByTagName("div");
         last = last[last.length - 1]
        //  if (!last) return; 
        if (last.innerHTML.endsWith("...")) {

            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
        }
        else {
            last.innerHTML = last.innerHTML + "."
        }


    }, 300)

    let text = ["Intializing Hacking", "Initialized Hacking now reading your data",
        "Reading your Files",
        "Password files Detected",
        "Sending all passwords and personal files to server",
        "Cleaning up",]

    for (const item of text) {
        await addItem(item)
    }


    await randomTimeout();
    clearInterval(t);
      


}

Main();

