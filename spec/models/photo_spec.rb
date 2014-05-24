require 'spec_helper'

describe Photo do
  it { should have_attached_file(:image) }
  it { should validate_attachment_presence(:image) }
  it { should validate_attachment_content_type(:image).allowing('image/png', 'image/gif', 'image/jpeg') }
end