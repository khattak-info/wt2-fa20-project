import { store } from 'react-notifications-component';

export default function createNotification (message,type,title="eSignature"){
    store.addNotification({
        title,
        message:message,
        type:type,
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
    });

}


