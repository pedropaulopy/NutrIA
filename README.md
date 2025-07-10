

<h1 align="center">🥗 Nutria Site</h1>
<h3 align="center">Registro de Alimentos com IA Nutricional</h3>

<p align="center">
  <img alt="Status" src="https://img.shields.io/badge/status-em%20desenvolvimento-blue?style=flat-square">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-green?style=flat-square">
</p>


## 📥 Como importar este fluxo no n8n

1. Acesse seu painel do n8n
2. Clique em “+” → **Import workflow**
3. Selecione o arquivo `fluxo-nutricional-n8n.json` baixado deste repositório
4. Configure as credenciais do Google Sheets, OpenAI e Email

## Visão Geral do Fluxo
![image](https://github.com/user-attachments/assets/92626797-bda7-4e98-80db-ab9f759b9da2)

## Email enviado
![image](https://github.com/user-attachments/assets/e1c9cc4d-6f53-47ca-af54-858a62fd3953)

---

## ✨ Sobre o Projeto

O **Nutria Site** é uma interface web moderna para registrar alimentos e suas quantidades, integrando-se a um backend de IA nutricional para análise e recomendações personalizadas.

---

## 🎯 Objetivo

Permitir que usuários registrem alimentos consumidos, enviando os dados para um serviço de IA que pode analisar hábitos alimentares e fornecer feedback nutricional.

---

## 🚀 Funcionalidades

- 📝 Formulário intuitivo para inserir nome do alimento e quantidade.
- 🔗 Envio dos dados para um endpoint backend via requisição HTTP.
- ✅ Feedback visual de sucesso ou erro no envio.
- 💡 Interface responsiva e agradável.

---

## 🖥️ Demonstração

<p align="center">
  <img src="https://user-images.githubusercontent.com/25181517/235294012-9e4b4e2e-2b7e-4e3c-8e3d-2b5e7e2e4e6c.gif" width="350" alt="Demonstração do Nutria Site"/>
</p>

---

## ⚡ Como usar

```bash
# 1. Clone este repositório
git clone https://github.com/seu-usuario/nutria-site.git

# 2. Instale as dependências do backend (não incluídas neste repositório)

# 3. Inicie o backend que escute em http://localhost:5678/webhook/alimento

# 4. Abra o arquivo index.html em seu navegador

# 5. Preencha o formulário e envie os dados
```

---

## 📁 Estrutura dos arquivos

```
nutria-site/
├── index.html      # Interface do usuário
├── style.css       # Estilos visuais
├── script.js       # Lógica de envio dos dados
└── README.md       # Este guia
```

---

## 🛠️ Requisitos

- Navegador moderno
- Backend de IA nutricional rodando localmente na porta 5678

---

## 📌 Observações

> Este projeto é apenas a interface web. O processamento nutricional deve ser implementado no backend.

---

<p align="center">
  Feito com 💚 por <a href="https://github.com/seu-usuario">Pedro Paulo</a>
</p>
