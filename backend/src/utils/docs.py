class Docs:
    delete_responses = {
        204: "No Content",
        404: "Não foi encontrada comunicação de perda associada a esse id",
    }

    get_by_id_responses = {
        200: "OK",
        404: "Não foi encontrada comunicação de perda associada a esse id",
    }

    put_responses = {
        200: "OK",
        400: "Os campos nome, email, cpf, localizacao, tipoLavoura, dataColheita e evento são obrigatórios",
        409: "Evento diverge de comunicação registrada na mesma data",
    }

    get_all_responses = {
        200: "OK",
    }

    post_responses = {
        201: "Created",
        400: "Os campos nome, email, cpf, localizacao, tipoLavoura, dataColheita e evento são obrigatórios",
        409: "Evento diverge de comunicação registrada na mesma data",
    }
