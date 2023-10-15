import { toast } from "react-toastify";

type NotificationType = "success" | "error" | "info" | "warn";


export const notify = (message : string, type: NotificationType) => {
    toast[type](message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}