// Arquivo responsável para pegar o objeto form de index.jsx e passar para Resumo.jsx

import { create } from 'zustand';

const useStore = create((set) => ({
    form: {
        nome: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        country: '',
        state: '',
        city: '',
        cep: '',
        message: '',
      },
      setForm: (updatedForm) => set({ form: updatedForm }),
}))

export default useStore;