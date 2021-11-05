clc; clear;
cwd = '/Users/scotti/Documents/GitHub/paulscotti.github.io/mturk/sketch/stimuli/frog';
imagefiles = dir(fullfile(cwd, ('*.png')));
nfiles = length(imagefiles);    % Number of files found

% cd output

preset = ['<img id="IDN" src="https://paulscotti.github.io/mturk/sketch/stimuli/frog/Object.png" style="position:absolute;display:none">'];
code = [];
for i = 1:100
    presetNew = strrep(preset,'Object.png',[imagefiles(i).name]);
    presetNew = strrep(presetNew,'IDN',[imagefiles(i).name(:,1:end-4)]);
    code = strcat(code,presetNew);
    presetNew = [];
    % rename image file
%     copyfile(fullfile(cwd,[imagefiles(i).name]),['Obj20_',num2str(10+i),'.jpg']);
end
disp('done');