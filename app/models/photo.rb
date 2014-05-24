class Photo < ActiveRecord::Base
  attr_accessible :image, :url
  has_attached_file :image,
                    styles: { medium: "320x320#" },
                    storage: :s3,
                    :s3_permissions => :private,
                    s3_credentials: Proc.new{|image| image.instance.s3_credentials }

  validates_attachment :image,  presence: true,
                                content_type: {content_type: ["image/jpeg", "image/gif", "image/png"]}

  def s3_credentials
    { bucket: 'sugarsnapper',
      access_key_id: ENV['AWSAccessKeyId'],
      secret_access_key: ENV['AWSSecretKey'],
      region: ENV['AWSRegion']}
  end


end