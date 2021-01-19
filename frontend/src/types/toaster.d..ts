type ToastType = "default" | "warning";

interface Toast {
    message: string;
    type: ToastType
}

type ToasterList = Toast[]