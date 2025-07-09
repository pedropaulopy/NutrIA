document.getElementById("alimento-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const quantidade = document.getElementById("quantidade").value.trim();
    const mensagem = document.getElementById("mensagem");

    if (!nome || !quantidade) {
        mensagem.textContent = "Preencha todos os campos.";
        mensagem.style.color = "red";
        return;
    }

    try {
        const resposta = await fetch("http://localhost:5678/webhook-test/alimento", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, quantidade })
        });

        if (resposta.ok) {
            mensagem.textContent = "Enviado com sucesso!";
            mensagem.style.color = "green";
            document.getElementById("alimento-form").reset();
        } else {
            throw new Error("Erro no envio");
        }
    } catch (err) {
        mensagem.textContent = "Erro ao enviar. Verifique a conexão.";
        mensagem.style.color = "red";
    }
});
