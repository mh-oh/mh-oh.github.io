
from pathlib import Path
from glob import glob
import markdown

# for path in glob("*.md"):
#   md = markdown.Markdown(extensions=['meta'])
#   with open(path, encoding="utf-8") as fin:
#     md.convert(fin.read())
#   meta = md.Meta
#   with open(f"{Path(path).stem}.mdx", "w") as fout:
#     fout.write(f"""
# export const meta = {{
#   title: {meta["title"][0]},
#   date: "{meta["date"][0]}"
# }}""")

with open("./members/alumni.ts", "a") as fout:
  fout.write("export const alumni = [\n")
  for path in glob("./members/alumni/*.md"):
    md = markdown.Markdown(extensions=['meta'])
    with open(path, encoding="utf-8") as fin:
      md.convert(fin.read())
    meta = md.Meta
    print(meta)
    fout.write(f"""  {{
    name: "{meta["name"][0]}",
    image: "/figs/members/alumni/{meta["image"][0]}",
    email: "{meta["email"][0]}",
    course: "{meta["course"][0]}",
    graduate: "{meta["graduate"][0]}",
    website: "{meta.get('website', [''])[0]}",
    status: "{meta.get('status', [''])[0]}",
  }},\n""")
    # break
  fout.write("]")