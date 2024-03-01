import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from 'fs';
import { useLocale } from "next-intl";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    console.log(request.headers.locale)
    const filename = 'RESUME-GRACIANNETTE.pdf'
    // get the filename for the file that the user is trying to download
    const locale = request.headers.locale as string
    const filePath = path.join(process.cwd(), 'public/files', locale, filename);
    const fileStream = fs.createReadStream(filePath);

    if (request.method !== 'GET') {
        return response.status(405).end();
    }

    response.setHeader('Content-Disposition', 'attachment; filename=' + filename);
    response.setHeader('Content-Type', 'application/pdf');

    fileStream.pipe(response);

    response.on('finish', () => {
        fileStream.close();
    });
}
