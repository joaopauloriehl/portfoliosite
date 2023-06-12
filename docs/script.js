function Conteudo(numero) {
    var conteudo = "";
    
    switch(numero) {
        case 1:
            conteudo = "<b><em>FORMAÇÃO ACADÊMICA</em><br><br>ENSINO MÉDIO COMPLETO</b><br>Instituto São José, São José dos Campos, SP | Dezembro 2021<br><b>ENSINO SUPERIOR CURSANDO</b><br>Escola de Propaganda e Marketing (ESPM), SP | Fevereiro, 2023 – 2027; Cursando Cinema e Audiovisual (CAV) – 1° Semestre<br><br><em><b>HISTÓRICO PROFISSIONAL</em><br><br>INSTITUTO SÃO JOSÉ</b> | São José dos Campos, SP<br><u>Representante de classe</u><br>Fui representante de classe no 8° ano do Ensino Fundamental II (2017) e no 3° ano do Ensino Médio (2021)<br><u>Voluntário | Março 2019 – Dezembro 2019</u><br>Grupo de jovens missionários para prestar serviços em comunidades carentes durante as férias de julho. Em 2019 a comunidade escolhida se localizava em um bairro de Tremembé.<br>Grupos para desenvolvimento de atividades para crianças e adultos e de acolhimento para a comunidade.<br><u>Simulações da ONU | 2019</u><br>Em 2019 participei das simulações da ONU do Instituto São José (SalesiONU) e do Colégio Planck (PlanckONU).<br><u>Oficina de Bioquímica | Março 2019 – Novembro 2019</u><br>Em 2019 participei de uma oficina com uma temática voltada para a bioquímica, assim como no começo do ano de 2020 no contexto de pré-pandemia.<br><u>Provas da OBA</u><br>Participei de duas edições: uma em 2014 e outra em 2015.<br><b>ATLETA CIDADÃO |</b> São José dos Campos, SP<br><u>Atleta de Handebol | 1° semestre de 2019</u><br>Fui atleta do time de handebol da cidade de São José dos Campos.<br><b>INSTITUTO SISTEMA INTEGRADO AO MERCADO DE TRABALHO (SIM) |</b> São Paulo, SP<br><u>Gestão Empresarial | Primeiro semestre de 2023</u><br>Cursei aulas sobre Gestão Empresarial no Instituto SIM, com bolsa de 100%, em São Paulo, SP.";
            break;
        case 2:
            conteudo = "<b><em>OBJETIVOS</b></em><br><br>Disposição para contribuir com o trabalho oferecido;<br>Dinamismo na realização de tarefas e organização;<br>Contribuição para o resultado buscado em relação ao trabalho oferecido;<br>Lidar com as responsabilidades atribuídas;<br>Concluir um trabalho de qualidade;<br>Desenvolver um ambiente de conversa e trabalho em equipe;<br>Entender o funcionamento e dinâmica do local/empresa.";
          
            break;
        case 3:
            conteudo = "<b><em>COMPETÊNCIAS</b></em><br><br>Coordenação de voluntários;<br>Disposição para o aprendizado e aprimoramento contínuos;<br>Dinamismo para execução de múltiplas tarefas;<br>Comunicação eficiente com a equipe;<br>Determinação e persistência para o alcance de metas;<br>Inteligência emocional para lidar com os desafios diários;<br>Bom relacionamento interpessoal para trabalho em equipe;<br>Capacidade de liderança e tomada de decisões assertivas;<br>Capacidade de planejamento e organização para o cumprimento de prazos;<br>Cordialidade e simpatia no trato com as pessoas;<br>Proatividade e iniciativa para resolução de problemas;<br>Criação de conteúdo, assim como supervisão do mesmo, para redes sociais;<br>Facilidade no aprendizado;<br>Inglês Intermediário-Avançado.";
            break;
    }
    
    document.getElementById("conteudo").innerHTML = conteudo;
}

/* TRABALHOS JAVASCRIPT */

function conteudotrabalho(numero){
  var conteudo = "";

  switch(numero){
    case 1:
      conteudo = '<img class="trab3" src="trabalhos/trabalho3.jpeg">' + '<a href="https://youtu.be/b2vMDjfzmr8"><img class="trab1" src="trabalhos/trabalho1.png"></a>' + '<a href="https://youtu.be/3s6R2aKuerI"><img class="trab2" src="trabalhos/trabalho2.png"></a>' + "<br><br>Um pôster representando o filme ''Scream''; Um curta (COMA!) realizado sobre distorção de imagem/distúrbios alimentares; Logo abaixo, uma videoarte (Teste) criticando o sistema de vestibulares e a angústia por trás do estudante. Basta clicar na imagem para assistir ao curta desejado. Muitos outros trabalhos estão por vir!";
      break;
    case 2:
      conteudo= '<img class="ttkp" src="trabalhos/tiktokprincipal.jpeg">' + '<img class="ttk1" src="trabalhos/tiktok1.jpeg">' + '<img class="ttk1" src="trabalhos/tiktok2.jpeg">' + '<img class="ttk1" src="trabalhos/tiktok3.jpeg">' + "<br><br>Aqui estão as estatísticas de alguns vídeos feitos por mim na plataforma TikTok."
      break;
  }
  document.getElementById("conteudo2").innerHTML = conteudo;
}

/* CONTATO JAVASCRIPT */
