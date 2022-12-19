const contactList = [
    {
        id: 1, name: 'Mst. Binu', phone: '01832317844', email: 'binu@gmail.com'
    },
    {
        id: 2, name: 'Md. Arif', phone: '01849676331', email: 'arif@gmail.com'
    },
    {
        id: 3, name: 'Md. Shahin', phone: '01786824152', email: 'shahin@gmail.com'
    }
]

exports.getContacts = (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Successfully get all contact',
        contacts: contactList
    })
}

exports.createContact = (req, res) => {
    const { name, phone, email } = req.body;
    for (const contact of contactList) {
        if (contact.phone === phone) {
            return res.status(400).json({
                success: false,
                message: 'Phone number already exist'
            })
        }

        if (contact.email === email) {
            return res.status(400).json({
                success: false,
                message: 'Email address already exist'
            })
        }
    }

    const contact = {
        id: contactList.length + 1,
        name,
        phone,
        email
    }

    contactList.push(contact);

    res.status(201).json({
        success: true,
        message: 'Successfully create the contact',
        contacts: contactList
    })
}