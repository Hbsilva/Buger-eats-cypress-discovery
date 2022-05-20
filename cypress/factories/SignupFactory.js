var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

deliver: function () {

    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()


    var data = {
        name: `${firstName} ${lastName}`,
        cpf: cpf.generate(),
        email: faker.internet.email(firstName),
        whatsapp: '71999999999' ,
        address: {
            postalcode: '40276140',
            street:'Vila São Roque',
            number: '1000',
            details: 'Ap 142',
            district: 'Campinas de Brotas',
            city_state: 'Salvador/BA'
        },
        delivery_method: 'Moto',
        cnh: 'cnh-digital.jpg'
    }

    return data

}

}