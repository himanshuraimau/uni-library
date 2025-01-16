import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constants";
import Image from "next/image";

const home = () =><>
        <BookOverview {...sampleBooks[0]}/>
        <BookList
         title="Latest Books"
         books={sampleBooks}
         containerClassName="mt-28"
        />

</>

export default home;
