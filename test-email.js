
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

async function testEmail() {
    console.log('Testing email send...');
    console.log('API KEY:', process.env.RESEND_API_KEY ? 'Set' : 'Not set');
    console.log('TO EMAIL:', process.env.EMAIL);

    try {
        const { data, error } = await resend.emails.send({
            from: 'Test <onboarding@resend.dev>',
            to: process.env.EMAIL,
            subject: 'Test Email',
            html: '<p>Testing</p>'
        });

        if (error) {
            console.error('Resend Error:', error);
        } else {
            console.log('Success:', data);
        }
    } catch (e) {
        console.error('Exception caught:', e);
    }
}

testEmail();
