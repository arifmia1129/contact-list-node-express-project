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