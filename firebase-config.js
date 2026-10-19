// Configuração do projeto Firebase "painel-cipa". Esses valores não são segredo:
// a segurança vem do login e das regras do Firestore.

// Modo simples (padrão): qualquer pessoa que consiga entrar com e-mail e senha acessa o Portal CIPA.
export const exigirLiberacao = false;

export const firebaseConfig = {
  apiKey: "AIzaSyCr9aKiJlidZ9m3ymwXQZm5oCYlhUYkdt4",
  authDomain: "painel-cipa.firebaseapp.com",
  projectId: "painel-cipa",
  storageBucket: "painel-cipa.firebasestorage.app",
  messagingSenderId: "110631146889",
  appId: "1:110631146889:web:fb8dbcd6e554e42d2fbd58"
};
