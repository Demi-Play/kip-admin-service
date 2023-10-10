import { fetchUtils } from "ra-core";

// eslint-disable-next-line import/no-anonymous-default-export
export default (apiUrl) => {
    const httpClient = (url) => {
        const options = {
            headers: new Headers({ Accept: 'application/json' }),
        };
        return fetchUtils.fetchJson(url, options);
    }

    return {
        

        create: async (resource, params) => {
            const json = await httpClient(`${apiUrl}/${resource}`, {
                method: 'POST',
                body: JSON.stringify(params.data),
            });
            return {
                data: { ...json },
            };
        }}}