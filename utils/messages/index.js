const MESSAGES = {
    registration: {
        general: "Pole nie może być puste",
        email: "Niestety email jest nie poprawny",
        phone: "Nie poprawny numer telefonu",
        description: "Zbyt długo wiadomość",
        regulations: "Regulamin powinien być zaakceptowany",
    },
};

module.exports = {
    registration: { ...MESSAGES.registration },
};