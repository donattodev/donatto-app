export default function AtendimentoLGPD() {
  return (
    <section className="box py-32">
      <h2 className="pb-10 text-2xl font-bold uppercase"> Atendimento LGPD</h2>
      <div className="flex flex-col gap-4">
        <p>
          O formulário de contato desta página é destinado a atender questões
          relacionadas à Lei Geral de Proteção de Dados, para outros assuntos
          como dúvidas, sugestões e reclamações, acesse o nosso formulário de
          contato.
        </p>

        <p>
          O titular de dados pessoais possui o direito de solicitar do site
          Pizzaria Fresco, a qualquer momento, mediante requisição formal,
          informações referentes aos seus dados.
        </p>

        <p>
          O site Pizzaria Fresco terá 14 dias úteis para responder às
          solicitações dos titulares de dados pessoais. Os pedidos serão
          analisados conforme previsto em legislação vigente e, por questões
          legais, algumas solicitações podem não ser atendidas.
        </p>

        <p>
          Os titulares de dados, segundo o texto da LGPD, podem exercer os seus
          direitos por meio de:
        </p>

        <ul className="flex flex-col gap-4">
          <li className="indent-8">
            &#8226; Confirmação da existência de tratamento;
          </li>
          <li className="indent-8"> &#8226; Acesso aos seus dados pessoais;</li>
          <li className="indent-8">
            &#8226; Correção de dados incompletos, inexatos ou desatualizados;
          </li>
          <li className="indent-8">
            &#8226; Anonimização, bloqueio ou eliminação de dados
            desnecessários, excessivos ou tratados em desconformidade com o
            disposto nesta Lei;
          </li>
          <li className="indent-8">
            &#8226; Portabilidade dos dados a outro fornecedor de serviço ou
            produto, mediante requisição expressa, de acordo com a
            regulamentação da autoridade nacional, observados os segredos
            comercial e industrial;
          </li>
          <li className="indent-8">
            &#8226; Eliminação dos dados pessoais tratados com o consentimento
            do titular;
          </li>
          <li className="indent-8">
            &#8226; Informação das entidades públicas e privadas com as quais o
            controlador realizou uso compartilhado de dados;
          </li>
          <li className="indent-8">
            &#8226; Informação sobre a possibilidade de não fornecer
            consentimento e sobre as consequências da negativa;
          </li>
          <li className="indent-8"> * Revogação do consentimento.</li>
        </ul>
      </div>
    </section>
  )
}
