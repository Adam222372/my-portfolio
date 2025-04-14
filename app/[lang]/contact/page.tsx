import Image from "next/image";

export default function Contact() {
    return (
        <section className={"mt-[100px] flex flex-col justify-center items-center"}>
            <div className={"flex justify-center flex-col items-center"}>
                  
                <form action={"/contact"} method={"POST"} className={"flex flex-col my-8"}>

                    <div className="flex space-y-2 justify-between w-full ">
                    <input type={"email"} name={"email"} placeholder={"Email Address"}
                           className={"border-b-2 border-gray-500 focus:border-white focus:outline-hidden my-8 w-55"}
                           required={true}/>

                    <input type={"text"} name={"subject"} placeholder={"Subject"}
                           className={"border-b-2  border-gray-500 focus:border-white focus:outline-hidden my-8 w-55"}/>

                    </div>
                   
                    <textarea name={"notes"} placeholder="Message" required={true}
                              className={" border-gray-500 border-3 focus:border-white focus:outline-hidden rounded-xl min-w-125 max-w-lg h-70 min-h-75 resize placeholder:ml-2 p-[1rem] "}></textarea>

                    <div className="flex justify-end items-center">
                    <button className={" bg-electric-blue text-white rounded-lg w-25 h-8 cursor-pointer m-4 hover:bg-electric-blue/70 transition font-medium"}>Submit</button>
                    </div>
                    
                </form>


           
                <div className={"flex justify-center flex-col"}>
                    <a href={"tel:+420 603 488 921"} className={"my-3 flex"}> <Image src="/../../public/tel-icon.svg" alt={"tel-icon"} width={20} height={20}/><p>+420 603
                        488 921</p></a>
                    <a href={"mailto:adamholecek22@gmail.com "} className={"my-3 flex space-x-2"}>
                        <Image src={"../../../public/mail-icon.svg"} alt={"mail-icon"} width={20} height={20}/><p>adamholecek22@gmail.com</p>
                    </a>
                </div>
               
            </div>


        </section>
    )
}