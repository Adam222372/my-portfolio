import {NextRequest} from "next/server";
import {redirect} from "next/navigation";

let locales = ["en", "cs"];

function getLocale({request}: {request: NextRequest}) {
    const clientLang = request.headers.get("accept-language");
    return Response.json(clientLang);
}


export function middleware({req}: { req: NextRequest }) {
   const clientLang = req.headers.get("accept-language") || "en";
   if (clientLang === "en") {
       console.log("en")
   }
   else if (clientLang === "cs") {
       console.log("cs")
   }
}