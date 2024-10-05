const { exec } = require('child_process');
const os = require('os');

// Function to execute a command
const executeCommand = (command) => {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(`Error: ${stderr}`);
                return;
            }
            resolve(stdout);
        });
    });
};

(async () => {
    try {
        // Step 1: Compile TypeScript
        await executeCommand('tsc');

        // Step 2: Determine OS and Zip the dist folder
        const platform = os.platform();

        if (platform === 'win32') {
            await executeCommand('powershell -command "Compress-Archive -Path dist\\* -DestinationPath dist.zip -Force"');
        } else {
            await executeCommand('zip -r dist.zip dist');
        }

        console.log('Build and zip completed successfully!');
    } catch (error) {
        console.error(error);
    }
})();
