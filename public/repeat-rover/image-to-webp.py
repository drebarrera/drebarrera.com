import os
from PIL import Image

def convert_and_delete_images(directory):
    files_changed = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith((".png", ".jpg", ".jpeg")):
                img = Image.open(os.path.join(root, file))
                filename_without_extension = os.path.splitext(file)[0]
                img.save(os.path.join(root, f"{filename_without_extension}.webp"), "WEBP")
                files_changed.append(filename_without_extension)
                os.remove(os.path.join(root, file))
    return files_changed

def list_file_sizes(directory):
    for filename in os.listdir(directory):
        info = os.stat(filename)
        print(f"{filename}: {info.st_size/1000} KB")

list_file_sizes('.')
files_changed = convert_and_delete_images('.')
list_file_sizes('.')
print("---------------------")
[print(x) for x in files_changed]