import Floor from "./Floor";
import NameInput from "./nameInput";
import SurnameInput from "./SurnameInput";
import Image from "./Image";

const LogIn = (props) => {
    return (
        <>
            <div className="LogIn">
                <h1 className="LogIn-h1">{props.title}</h1>
                    <main className="main">
                        <NameInput/>
                        <SurnameInput/>
                    </main>
                    <main className="main2">
                        <Floor/>
                        <Image/> 
                    </main>
            </div>

            <div className="UserCard">
                <h1 className="LogIn-h1">User Card</h1>
                <p className="UserCard-p">Тут должна была заполняться карточка пользователя, типа как паспорт, но я не понял как это сделать</p>
            </div>
        </>
    )
}

export default LogIn;