import Banner7 from "../../../componets/services/Banner7";

function layout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
        <div>
            {children}
        
        <Banner7/>
        </div>
    );
}

export default layout;