import Container from "../Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu";

const Navbar = () => {
    return (
        <div className="fixed bg-white w-full z-10 shadow-sm">
            <div className="border-b-[1px] py-3">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3">
                        <Logo/>
                        <UserMenu />
                    </div>
                </Container>
            </div>
        </div>
    );
}
 
export default Navbar;
