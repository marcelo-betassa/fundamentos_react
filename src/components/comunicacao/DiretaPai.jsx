import React from "react";
import DiretaFilho from './DiretaFilho'

let diretaPai = (props) => {

    return (
        <div>
            <DiretaFilho nome="Juliano" idade={26} nerd={true} />
            <DiretaFilho nome="Paula" idade={21} nerd={true} />
            <DiretaFilho nome="Paulo" idade={37} nerd={false} />
        </div>
    )
}

export default diretaPai;