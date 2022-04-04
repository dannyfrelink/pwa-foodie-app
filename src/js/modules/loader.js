import { loader } from "./variables.js";

export const startLoader = () => {
    loader.classList.remove('hidden');
}

export const stopLoader = () => {
    loader.classList.add('hidden');
}