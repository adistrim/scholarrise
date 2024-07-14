import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const formData = await request.formData();

        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const address = formData.get('address');
        const studentType = formData.get('studentType');
        const schoolName = formData.get('schoolName');
        const collegeName = formData.get('collegeName');
        const currentClass = formData.get('currentClass');
        const currentCGPA = formData.get('currentCGPA');
        const familyIncome = formData.get('familyIncome');

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: process.env.EMAIL_SECURE === 'true',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const attachments = [];
        const fileFields = ['idCard', 'lastMarksheet', 'transcript', 'resume', 'aadharCard', 'incomeProof', 'recommendationLetter', 'parentAadharCard'];

        for (const field of fileFields) {
            const file = formData.get(field);
            if (file && file instanceof Blob) {
                const buffer = Buffer.from(await file.arrayBuffer());
                attachments.push({
                    filename: file.name,
                    content: buffer
                });
            }
        }

        await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject: `New Scholarship Application: ${name}`,
            text: `
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Address: ${address}
    Parent's Name: ${parentName}
    Relation with Parent: ${relationWithParent}
    Annual Family Income: ${familyIncome}
    Student Type: ${studentType}
    ${studentType === 'school' ? `School Name: ${schoolName}` : `College Name: ${collegeName}`}
    Current ${studentType === 'school' ? 'Class' : 'Year'}: ${currentClass}
    ${studentType === 'college' ? `Current CGPA: ${currentCGPA}` : ''}
    
    Attached Documents:
    - ID Card
    - ${studentType === 'school' ? 'Last Marksheet' : 'Transcript'}
    - Aadhar Card
    - Parent's Aadhar Card
    - Income Proof Document
    ${studentType === 'college' ? '- Resume' : ''}
    ${studentType === 'college' ? '- Letter of Recommendation' : ''}
`,
            attachments: attachments,
        });

        return NextResponse.json({ message: 'Application submitted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error submitting application:', error);
        return NextResponse.json({ message: 'Error submitting application' }, { status: 500 });
    }
}