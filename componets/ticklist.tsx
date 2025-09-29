import Icon from "./icons";

function Ticklist(props:any) {
    return ( <div

            className="flex gap-2  w-full mx-auto max-w-40"
        >
            <div className="rounded-full w-5  h-5 bg-blue-100 flex text-button-purple justify-center  items-center">
                <Icon name={props.icon=='right'?'check':'notcheck'} className="text-xs " />
            </div>

            <p className="text-sm text-start text-light-base font-medium w-fit">
                {props.name}
            </p>
        </div>)
}

export default Ticklist;