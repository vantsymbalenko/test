
export const getFlagUrl = (countryCode) => {
    const url = `http://www.countryflags.io`;
    const style = `flat`;
    const size = 32;
    return `${url}/${countryCode}/${style}/${size}.png`;
};