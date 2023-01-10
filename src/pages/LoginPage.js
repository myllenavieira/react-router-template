import Header from "../components/Header";
import { MainContainer } from "../style";

export default function LoginPage() {
    return (
        <MainContainer>
            <Header />
            <div>
                <form>
                    <label>Username: </label>
                    <input type="text" />
                    <label>Password: </label>
                    <input type="password" />
                    <input type="submit" />
                </form>
            </div>
        </MainContainer>
    )
}