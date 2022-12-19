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
    if (!contactList.length) {
        return res.status(400).json({
            success: false,
            message: 'Contact list empty'
        })
    }
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


exports.getContact = (req, res) => {
    const { contactId } = req.params;

    const contact = contactList.find(c => c.id == contactId);

    if (!contact) {
        return res.status(404).json({
            success: false,
            message: 'Contact not found by given id'
        })
    }
    res.status(200).json({
        success: true,
        message: 'Successfully found contact',
        contact: contact
    })

}


exports.updateContact = (req, res) => {
    const { contactId } = req.params;

    const contact = contactList.find(c => c.id == contactId);

    if (!contact) {
        res.status(404).json({
            success: false,
            message: 'Contact not found by given id'
        })
    }

    if (req.body.name || req.body.phone || req.body.email) {
        if (req.body.name) {
            contact.name = req.body.name;
        }
        if (req.body.phone) {
            contact.email = req.body.phone;
        }
        if (req.body.email) {
            contact.email = req.body.email;
        }

        return res.status(200).json({
            success: true,
            message: 'Successfully update contact',
            contact: contact
        })


    }

    res.status(400).json({
        success: false,
        message: "Can't found update property. Include update properly and value in body"
    })
}


exports.deleteContact = (req, res) => {
    const { contactId } = req.params;

    const contact = contactList.find(c => c.id == contactId);

    if (!contact) {
        res.status(404).json({
            success: false,
            message: 'Contact not found by given id'
        })
    }
    const filteredContact = contactList.filter(c => c.id != contactId);

    res.status(200).json({
        success: true,
        message: 'Successfully delete contact',
        contacts: filteredContact
    })
}