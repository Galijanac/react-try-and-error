import { useState } from "react";
import Modal from "./modal"





export default function ModalTest() {
    const [showModalPopup, setShowModalPopup] = useState(false);

    function handleToggleModalPopup() {
        setShowModalPopup(!showModalPopup);
    }

    function onClose() {
        setShowModalPopup(false);
    }
    return <div>

        <button onClick={handleToggleModalPopup}> Open Modal Popup</button>
        {showModalPopup &&
            <Modal onClose={onClose}
                body={<div> Customize Body </div>}
                header={<h1>Customize header</h1>}
                footer={<h1>Customize footer</h1>}
                id={'custom-id'} />}
    </div>
}