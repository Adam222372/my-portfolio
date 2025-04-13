import Image from "next/image";

export default function Contact() {
    return (
        <section className={"mt-12"}>
            <h2 className={"text-center text-2xl"}>Contact me</h2>
            <div className={"flex justify-center flex-col items-center"}>
                  
                <form action={"/contact"} method={"POST"} className={"flex flex-col my-10"}>

                    <div className="flex space-y-2 justify-between w-full">
                    <input type={"email"} name={"email"} placeholder={"Email Address"}
                           className={"border-b-2 border-gray-500 focus:border-white focus:outline-hidden my-8 w-55"}
                           required={true}/>

                    <input type={"text"} name={"subject"} placeholder={"Subject"} required={true}
                           className={"border-b-2  border-gray-500 focus:border-white focus:outline-hidden my-8 w-55"}/>

                    </div>
                   
                    <textarea name={"notes"}
                              className={" border-gray-500 focus:border-white focus:outline-hidden border-2 rounded-xl min-w-125 max-w-lg h-70 min-h-75 resize placeholder:ml-2"}
                              placeholder={"Notes..."}></textarea>


                    <button className={"bg-white text-black rounded-lg focus:border-white w-30 h-8 my-8 cursor-pointer m-2 item-end"}>Submit</button>
                </form>


           
                <aside className={"flex justify-center flex-col"}>
                    <a href={"tel:+420 603 488 921"} className={"my-3 flex"}> <Image src={"/tel-icon.svg"}
                                                                                     alt={"tel-icon"}
                                                                                     width={20} height={20}/><p>+420 603
                        488 921</p></a>
                    <a href={"mailto:adamholecek22@gmail.com "} className={"my-3 flex space-x-2"}><Image
                        src={"/mail-icon.svg"} alt={"mail-icon"} width={20} height={20}/><p>adamholecek22@gmail.com</p>
                    </a>
                </aside>
               
            </div>


        </section>
    )
}