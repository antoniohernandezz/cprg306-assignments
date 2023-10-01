import item from "./item";
import Itemlist from "./item-list";

export default function Page(){
    return(
        <main className="flex flex-col items-center justify-between">
            <h1>Shopping List</h1>
            <Itemlist />
        </main>
    );
}
